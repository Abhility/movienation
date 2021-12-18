import { ArrowRightIcon, CalendarIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { MdOutlineOndemandVideo } from 'react-icons/md'
import {
    Image, Box, Text, VStack, Divider,
    Tag, Button, HStack, Link as ExternalLink,
    Tooltip, TagLabel, TagLeftIcon, useMediaQuery
} from "@chakra-ui/react";
import Link from "next/link";
import CastList from "../../../components/CastList";
import Genres from "../../../components/ui/Genres";
import Production from "../../../components/ui/ProductionList";
import Rating from "../../../components/ui/Rating";
import WatchOption from "../../../components/WatchOption";
import RelatedMovies from "../../../components/RelatedMovies";
import MovieSocialLinks from "../../../components/MovieSocialLinks";
import WatchListButton from "../../../components/WatchListButton";
import { useEffect, useState } from "react";
import ImagesCarousel from "../../../components/carousel/ImagesCarousel";
import { useRouter } from "next/router";

const MovieDetailsPage = ({ movie }) => {
    const router = useRouter();
    const { movieId } = router.query;
    const [images, setImages] = useState([]);
    const [showSliders, setShowSliders] = useState(false);
    const [isLargerThan1150] = useMediaQuery('(min-width: 1150px)');
    const [isLargerThan1265] = useMediaQuery('(min-width: 1265px)');

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:5000/movie-info/getmovie/${movieId}/images`);
            const data = await response.json();
            setImages(data);
        })();
    }, [movieId]);

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
            <Link href={`/movies/${movie.id}/videos`}>
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

    const carouselRenderItem = (item, otherProps) => (
        <Image
            src={`https://image.tmdb.org/t/p/original${item.props.image.file_path}`}
            alt={item.props.image.file_path}
            objectFit='fill'
            className="backdrop-carousel-image"
            fallbackSrc="../image-not-found.jpg"
            width='100%'
            height='100%'
            objectFit='fill'
            {...otherProps} />
    );

    const BackdropCarousel = () => {
        return (
            <Box
                display='flex'
                alignItems='center'
                width='100%'
                height='40rem'
                overflow='hidden'>
                {showSliders ?
                    <ImagesCarousel
                        images={images.backdrops}
                        renderItem={carouselRenderItem}
                        infiniteLoop={true}
                        stopOnHover={false}
                        autoPlay={true}
                        showThumbs={false}
                    /> :
                    <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.title}
                        fallbackSrc="../image-not-found.jpg"
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
                height='32rem'
                boxShadow='dark-lg'
                borderRadius='lg'
                overflow='hidden'>
                {showSliders ?
                    <ImagesCarousel images={images.posters} className="poster-carousel"
                        renderItem={carouselRenderItem}
                        showIndicators={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={1500}
                        stopOnHover={false}
                        showArrows={false}
                        dynamicHeight={true}
                        showThumbs={false}
                    /> :
                    <Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
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
                    <Text fontSize='4xl'>{movie.title}</Text>
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
                    <Production isLargerThan1265={isLargerThan1265} productionData={movie.production_companies} />
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
}

export const getServerSideProps = async (context) => {
    const { movieId } = context.params;

    try {
        const response = await fetch(`http://localhost:5000/movie-info/getmovie/${movieId}`);
        const movieData = await response.json();
        if (movieData.success === false) {
            throw new Error(movieData.status_message);
        }
        return {
            props: {
                movie: movieData
            }
        }
    } catch (err) {
        return {
            notFound: true
        }
    }
}

export default MovieDetailsPage;