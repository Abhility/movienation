import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Slider } from 'react-responsive-carousel';
import { Text } from "@chakra-ui/react";

const ImagesCarousel = ({ images, ...props }) => {

    return (
        <Slider {...props}>
            {images && images.map((image,i) => <Text key={i} image={image} />)}
        </Slider>
    )
}

export default ImagesCarousel;