import { useEffect, useState } from "react";
import { Box, Divider, Text, VStack } from '@chakra-ui/react';
import Cast from "./ui/Cast";
import CastSkeleton from "./loaders/skeletons/CastSkeleton";

const CastList = ({ movieId }) => {
    const [castData, setCastData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchMovieCast = async () => {
        const response = await fetch(`http://localhost:5000/movie-info/getmovie/${movieId}/credits`);
        const data = await response.json();
        if (data) {
            setCastData(data.cast);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMovieCast()
    }, [movieId]);

    let CastListContainer = () => {
        return (
            castData ?
                <Box display='flex'
                    flexWrap='wrap'
                    width='100%'
                    gap='2rem'
                    mt={3}
                    px={5}
                    justifyContent='center'
                    alignItems='center'>
                    {castData.map(cast => <Cast cast={cast} key={cast.id} />)}
                </Box> : null
        )
    };

    return (
        <VStack width='100%' mx={5} alignItems='center'>
            <Text fontSize='4xl'>Cast</Text>
            <Divider />
            {loading ? <CastSkeleton count={10} /> : <CastListContainer />}
        </VStack>
    );
};

export default CastList;