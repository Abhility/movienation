import { VStack } from "@chakra-ui/react";
import WelcomeLoader from "../../components/loaders/WelcomeLoader";
import Pagination from "../../components/Pagination";
import MovieList from "../../components/ui/MoviesList";

const NowShowingMovies = ({ movies }) => {

    return (
        <VStack my={10} gap={5}>
            <WelcomeLoader />
            <MovieList movies={movies} />
            <Pagination noOfPages={10} />
        </VStack>
    );
};

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:5000/movie-info/getmovies/now_playing');
    const data = await response.json();
    return {
        props: {
            movies: data
        }
    }
}

export default NowShowingMovies;