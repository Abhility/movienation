import React from 'react';
import { Box, Divider, Text, VStack } from '@chakra-ui/react';
import Cast from "./ui/Cast";
import CastSkeleton from "./loaders/skeletons/CastSkeleton";
import useHttp from "../hooks/useHttp";
import Carousel from './carousel/CoverFlowCarousel';

const CastList = ({ movieId }) => {
    const { data, loading, hasError } = useHttp(`http://localhost:5000/movie-info/getmovie/${movieId}/credits`);
    const castData = data?.cast;

    let CastListContainer = () => {
        return (
            castData ?
                <Box display='flex'
                    flexWrap='wrap'
                    width='100%'
                    height='100%'
                    gap='2rem'
                    mt={3}
                    px={5}
                    justifyContent='center'
                    alignItems='center'>
                    <Carousel
                        items={castData.map(cast => <Cast cast={cast}/>)}
                        autoplayDuration={3000}
                    />
                </Box> : null
        )
    };

    return (
        <VStack width='100%' height='500px' mx={5} alignItems='center' gap={5}>
            <Text fontSize='4xl'>Cast</Text>
            <Divider />
            {loading ? <CastSkeleton count={20} /> : <CastListContainer />}
        </VStack>
    );
};

export default React.memo(CastList);