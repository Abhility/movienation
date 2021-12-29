import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectFade, Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/effect-cards"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Carousel = ({ items, effect, autoplayDuration = 2000, dots = false, arrows = false}) => {

    return (
        <>
            <Swiper
                grabCursor={true}
                effect={effect}
                modules={[EffectCards, EffectFade, Autoplay, Navigation, Pagination]}
                autoplay={{
                    delay: autoplayDuration,
                    disableOnInteraction: false
                }}
                navigation={arrows}
                pagination={{
                    type: dots ? 'bullets' : 'none',
                    clickable: dots
                }}>
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