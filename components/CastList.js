import { useEffect, useState } from "react";
import { Box, Divider, Text, VStack } from '@chakra-ui/react';
import Cast from "./ui/Cast";

const CastList = ({ movieId }) => {
    const [castData, setCastData] = useState(null);

    const fetchMovieCast = async () => {
        const response = await fetch(`http://localhost:5000/movie-info/getmovie/${movieId}/credits`);
        const data = await response.json();
        if (data) {
            setCastData(data.cast);
        }
    }

    useEffect(() => {
       fetchMovieCast();
    }, [movieId]);
    return (
        castData ? (
            <Box display='flex'
                flexWrap='wrap'
                alignItems='center'
                justifyContent='center'
                width='100%'>
                <VStack width='100%'>
                    <Text fontSize='4xl'>Cast</Text>
                    <Divider />
                    <Box display='flex'
                        flexWrap='wrap'
                        width='100%'
                        gap='2rem'
                        alignItems='center'>
                        {castData.map(cast => <Cast cast={cast} key={cast.id} />)}
                    </Box>
                </VStack>
            </Box>) : <p>Loading...</p>
    )
};

export default CastList;