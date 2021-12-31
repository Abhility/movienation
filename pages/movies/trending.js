import { HStack, Image } from "@chakra-ui/react";
import Carousel from '../../components/carousel/Carousel';
import Movie from "../../components/ui/Movie";

const TrendingMoviesPage = ({ movieData }) => {
    const { results: movies } = movieData;
    return (
        <HStack width='30%' mx='auto' mt={5}>
            <Carousel
                effect='cube'
                items={movies.map(movie => <Movie movie={movie} />)} />
        </HStack>
    );
};

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:5000/movie-info/trending?page=1');
    const data = await response.json();

    return {
        props: {
            movieData: data
        },
        revalidate: 80000
    }
}

export default TrendingMoviesPage;

// items={movies.map(movie => <Image src={`${imageUrls.TMDB.medium}${movie.poster_path}`}
// alt={movie.title}
// borderRadius='xl'
// width='100%'
// height='100%' />)}