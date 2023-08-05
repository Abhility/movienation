import { Divider, Text, Tooltip, VStack } from "@chakra-ui/react";
import React from "react";
import useHttp from "../hooks/useHttp";
import MoviesList from './ui/MoviesList';

const RelatedMovies = ({ movieId }) => {
    const { data, loading, hasError } = useHttp(`https://moviefy.glitch.me/movie-info/movie/${movieId}/related`);
    let relatedMovies = data?.results;
    const randomIndex = Math.round(Math.random() * (relatedMovies?.length));
    relatedMovies = relatedMovies?.slice(randomIndex, randomIndex + 3);

    return (
        <VStack width='100%' mx={5} mb={5} gap={5}>
            <Tooltip label='This is based on the genre of the movies' hasArrow placement='right'>
                <Text fontSize='4xl'>Related Movies</Text>
            </Tooltip>
            <Divider />
            {<MoviesList movies={relatedMovies} loading={loading} count={3} />}
        </VStack>
    );
}

export default React.memo(RelatedMovies);