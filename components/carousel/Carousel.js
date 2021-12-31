import { Swiper, SwiperSlide } from "swiper/react";
import {
    EffectCards, EffectFade, EffectCoverflow,
    EffectCreative, EffectCube, Autoplay, Navigation, Pagination
} from 'swiper';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ items, effect, autoplayDuration = 2000, dots = false, arrows = false }) => {

    return (
        <>
            <Swiper
                className={`${effect}-carousel`}
                grabCursor={true}
                effect={effect}
                modules={[EffectCards, EffectFade, EffectCoverflow,
                    EffectCreative, Autoplay, Navigation,
                    EffectCube, Pagination]}
                autoplay={{
                    delay: autoplayDuration,
                    disableOnInteraction: false,
                }}
                navigation={arrows}
                pagination={{
                    type: dots ? 'bullets' : 'none',
                    clickable: dots
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
                cubeEffect={{
                    "shadow": true,
                    "slideShadows": true,
                    "shadowOffset": 20,
                    "shadowScale": 0.94
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

export default Carousel;