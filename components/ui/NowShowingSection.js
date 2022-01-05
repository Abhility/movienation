import { Box, Image, Stack, Text, VStack } from "@chakra-ui/react";
import Lottie from "lottie-web";
import { useRef } from "react";
import { useEffect } from "react";
import { animations, imageUrls } from "../../constants/global";
import Carousel from "../carousel/Carousel";

const NowShowingSection = ({ movies }) => {

    const nowShowingAnimation = useRef();

    useEffect(() => {
        Lottie.loadAnimation({
            container: nowShowingAnimation.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: animations.TICKET
        });
    }, []);

    return (
        <Stack
            direction={{ base: 'column', md: 'row' }}
            width='100%'
            mt='4rem !important'>
            <VStack minW='40%'>
                <Text fontSize='4xl' fontWeight='800' fontStyle='italic'>Now showing in theatres!</Text>
                <div class='now-showing-animation' ref={nowShowingAnimation}></div>
            </VStack>
            <Box minW='60%' height='500px'>
                <Carousel
                    effect='fade'
                    arrows={true}
                    items={movies.map(movie => <Image
                        alt={movie.name}
                        fit='fill'
                        rounded={'xl'}
                        w='100%'
                        h='100%'
                        src={`${imageUrls.TMDB.full}${movie.poster_path}`}
                    />)} />
            </Box>
        </Stack>
    );
};

export default NowShowingSection;