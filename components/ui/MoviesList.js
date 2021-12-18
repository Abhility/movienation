import { Wrap, WrapItem } from "@chakra-ui/react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
    return (
        <Wrap spacing={8} justify='center' overflow={'hidden'}>
            {
                movies.map(movie => (
                    <WrapItem key={movie.id}>
                        <Movie movie={movie} />
                    </WrapItem>
                ))
            }
        </Wrap>
    )
}

export default MovieList;