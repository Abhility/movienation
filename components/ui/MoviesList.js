import { HStack } from "@chakra-ui/react";
import Movie from "./Movie";
import MovieSkeleton from '../loaders/skeletons/MovieSkeleton';

const MovieList = ({ movies, loading, count }) => {
    return (
        <HStack
            gap={16}
            width='100%'
            justify='center'
            flexWrap='wrap'>
            {loading ? <MovieSkeleton count={count} /> : movies ? movies.map(movie => (<Movie movie={movie} key={movie.id} />)) : null}
        </HStack>
    )
}

export default MovieList;