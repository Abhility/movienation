import { ArrowRightIcon, CalendarIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { MdOutlineOndemandVideo } from 'react-icons/md'
import {
    Image, Box, Text, VStack, Divider,
    Tag, Button, HStack, Link as ExternalLink,
    Tooltip, TagLabel, TagLeftIcon, useMediaQuery
} from "@chakra-ui/react";
import Link from "next/link";
import CastList from "./CastList";
import Genres from "./ui/Genres";
import Production from "./ui/ProductionList";
import Rating from "./ui/Rating";
import WatchOption from "./WatchOption";
import RelatedMovies from "./RelatedMovies";
import MovieSocialLinks from "./MovieSocialLinks";
import WatchListButton from "./WatchListButton";
import { useEffect, useState } from "react";
import ImagesCarousel from "./carousel/ImagesCarousel";
import { imageUrls } from '../constants/global'
import useHttp from "../hooks/useHttp";

const MovieDetails = ({ movie }) => {
    const movieId = movie.id;
    const { data, loading, hasError } = useHttp(`http://localhost:5000/movie-info/getmovie/${movieId}/images`);
    const images = data;
    const [showSliders, setShowSliders] = useState(false);
    const [isLargerThan1150] = useMediaQuery('(min-width: 1150px)');
    const [isLargerThan1265] = useMediaQuery('(min-width: 1265px)');

    useEffect(() => {
        let sliderTimer = setTimeout(() => setShowSliders(true), 3000);

        return () => {
            clearTimeout(sliderTimer);
        }
    }, []);

    const HomePageButton = () => {
        return (
            movie.homepage ?
                <Tooltip label="Movie's official website" hasArrow placement='bottom'>
                    <ExternalLink mx='0 !important' href={movie.homepage} isExternal>
                        <Button
                            rightIcon={<ExternalLinkIcon />}
                            colorScheme='white'
                            variant='outline'>
                            Homepage
                        </Button>
                    </ExternalLink>
                </Tooltip> : null
        );
    };

    const VideosButton = () => {
        return (
            <Link href={`/movies/${movie.id}/videos`} passHref>
                <Button
                    leftIcon={<MdOutlineOndemandVideo />}
                    rightIcon={<ArrowRightIcon />}
                    variant='outline'
                    colorScheme='blue'
                    mx='0 !important'
                >
                    Videos
                </Button>
            </Link>
        );
    };

    const MovieReleaseDate = () => {
        return (
            <Tooltip label='Release Date' hasArrow placement='bottom'>
                <Tag py={2} px={3} colorScheme='yellow'>
                    <TagLeftIcon as={CalendarIcon} />
                    <TagLabel> {movie.release_date}</TagLabel>
                </Tag>
            </Tooltip>
        );
    };

    const MovieOverview = () => {
        return (
            <VStack align={isLargerThan1265 ? 'flex-start' : 'center'} flexWrap="wrap" maxW='2xl'>
                <Text fontSize='2xl'>Overview</Text>
                <Divider />
                <Text>{movie.overview}</Text>
            </VStack>
        );
    };

    const carouselRenderItem = (isFullSize, item, otherProps) => {
        const imageBaseUrl = isFullSize ? imageUrls.TMDB.full : imageUrls.TMDB.medium;
        return (
            <Image
                src={`${imageBaseUrl}${item.props.image.file_path}`}
                alt={item.props.image.file_path}
                objectFit='fill'
                className="backdrop-carousel-image"
                fallbackSrc={imageUrls.STOCK.backdrop}
                height='100%'
                {...otherProps} />
        );
    };

    const BackdropCarousel = () => {
        return (
            <Box
                display='flex'
                alignItems='center'
                width='100%'
                //height='40rem'
                mt={1}
                overflow='hidden'>
                {showSliders && images?.backdrops.length > 0 ?
                    <ImagesCarousel
                        images={images?.backdrops}
                        renderItem={carouselRenderItem.bind(null, true)}
                        infiniteLoop={true}
                        stopOnHover={false}
                        autoPlay={true}
                        showThumbs={false}
                    /> :
                    <Image src={`${imageUrls.TMDB.full}${movie.backdrop_path}`}
                        alt={movie.title}
                        fallbackSrc={imageUrls.STOCK.backdrop}
                        width='100%'
                        height='100%'
                        objectFit='fill' />
                }
            </Box>
        );
    };

    const PosterCarousel = () => {
        return (
            <Box
                display='flex'
                alignItems='center'
                width='32rem'
              //  height='40rem'
                boxShadow='dark-lg'
                borderRadius='lg'
                overflow='hidden'>
                {showSliders && images?.posters.length > 0 ?
                    <ImagesCarousel images={images?.posters} className="poster-carousel"
                        renderItem={carouselRenderItem.bind(null, false)}
                        showIndicators={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={1500}
                        stopOnHover={false}
                        showArrows={false}
                        dynamicHeight={true}
                        showThumbs={false}
                    /> :
                    <Image src={`${imageUrls.TMDB.medium}${movie.poster_path}`}
                        alt={movie.title}
                        width='100%'
                        height='100%'
                        objectFit='fill'
                    />
                }
            </Box>
        );
    };

    return (
        <Box display='flex' alignItems='center' justifyContent='center' gap={4} flexWrap='wrap'>
            {isLargerThan1150 && <BackdropCarousel />}
            <Box display='flex' flexWrap='wrap' width='100%' p={5} gap='2rem' alignItems='center' justifyContent='space-evenly'>
                <PosterCarousel />
                <VStack align={isLargerThan1265 ? 'flex-start' : 'center'} spacing='1.5rem' flexWrap="wrap">
                    <Text fontSize='3xl'>{movie.title}</Text>
                    <HStack gap={3} flexWrap="wrap">
                        <MovieReleaseDate />
                        <WatchOption movieId={movie.id} />
                    </HStack>
                    <HStack gap='2rem' flexWrap="wrap">
                        <Rating rating={movie.vote_average} />
                        <MovieSocialLinks movieId={movie.id} />
                    </HStack>
                    <Genres genreList={movie.genres.map(genre => genre.id)} size='lg' />
                    <MovieOverview />
                    <Production isLargerThan1150={isLargerThan1150} productionData={movie.production_companies} />
                    <HStack gap='2rem' flexWrap="wrap" justifyContent='flex-start' alignItems='center'>
                        <WatchListButton movieId={movie.id} />
                        <HomePageButton />
                        <VideosButton />
                    </HStack>
                </VStack>
                <CastList movieId={movie.id} />
                <RelatedMovies movieId={movie.id} />
            </Box>
        </Box>
    );
};

export default MovieDetails;