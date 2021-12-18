import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Slider } from 'react-responsive-carousel';

const Carousel = ({ items }) => {
    return (
        <Slider>
            <div>
                <img src="https://picsum.photos/500/500" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://picsum.photos/500/500" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://picsum.photos/500/500" />
                <p className="legend">Legend 3</p>
            </div>
        </Slider>
    );
}

export default Carousel;