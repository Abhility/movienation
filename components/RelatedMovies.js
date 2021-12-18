import { Divider, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
        !loading &&
        <VStack gap='1rem' width='100%'>
            <Text fontSize='4xl'>Related Movies</Text>
            <Divider />
            <MoviesList movies={relatedMovies} />
        </VStack>
    );
}

export default RelatedMovies;