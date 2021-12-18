import { useEffect, useState } from "react";
import ImagesCarousel from "./carousel/ImagesCarousel";

const MovieImages = ({ movieId }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovieImages = async () => {
        const response = await fetch(`http://localhost:5000/movie-info/getmovie/${movieId}/images`);
        const data = await response.json();
        setImages(data.backdrops);
        setLoading(false);
    };

    useEffect(() => {
        fetchMovieImages();
    }, []);

    return (
        loading ? <h1>Loading..</h1> : <ImagesCarousel images={images} />
    )
}

export default MovieImages;