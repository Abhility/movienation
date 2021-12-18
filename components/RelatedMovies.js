import { Divider, Text, Tooltip, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MovieSkeleton from "./loaders/skeletons/MovieSkeleton";
import MoviesList from './ui/MoviesList';
const RelatedMovies = ({ movieId }) => {
    const [relatedMovies, setRelatedMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRelatedMovies = async () => {
        const response = await fetch(`http://localhost:5000/movie-info/movie/${movieId}/related`);
        const data = await response.json();
        const randomIndex = Math.round(Math.random() * (data.length));
        setRelatedMovies(data && data.slice(randomIndex, randomIndex + 3));
        setLoading(false);
    };

    useEffect(() => {
        fetchRelatedMovies();
    }, [movieId]);

    return (
        <VStack gap='1rem' width='100%' mx={5} mb={5}>
            <Tooltip label='This is based on the genre of the movies' hasArrow placement='right'>
                <Text fontSize='4xl'>Related Movies</Text>
            </Tooltip>
            <Divider />
            {loading ? <MovieSkeleton count={3} /> : <MoviesList movies={relatedMovies} />}
        </VStack>
    );
}

export default RelatedMovies;