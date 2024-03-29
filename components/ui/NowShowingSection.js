import { Box, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { imageUrls } from "../../constants/global";
import Carousel from "../carousel/Carousel";

const NowShowingSection = ({ movies }) => {

    return (
        <VStack
            width='100%'
            mt='4rem !important'>
            <Text fontSize='4xl' fontWeight='800' fontStyle='italic'>Now showing in theatres!</Text>
            <Box height='1280px' width='90%'>
                <Carousel
                    effect='fade'
                    arrows={true}
                    items={movies.map(movie => <Image
                        key={movie.id}
                        alt={movie.name}
                        fit='fill'
                        rounded={'xl'}
                        w='100%'
                        h='100%'
                        src={`${imageUrls.TMDB.full}${movie.poster_path}`}
                    />)} />
            </Box>
        </VStack>
    );
};

export default NowShowingSection;