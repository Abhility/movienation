import { HStack } from "@chakra-ui/react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
    return (
        <HStack
            gap={16}
            width='100%'
            justify='center'
            flexWrap='wrap'>
            {movies.map(movie => (<Movie movie={movie} key={movie.id} />))}
        </HStack>
    )
}

export default MovieList;