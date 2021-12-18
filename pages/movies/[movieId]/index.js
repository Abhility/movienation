import { ArrowRightIcon, CalendarIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { MdOutlineOndemandVideo } from 'react-icons/md'
import {
    Image, Box, Text, VStack, Divider,
    Tag, Button, HStack, Link as ExternalLink,
    Tooltip, TagLabel, TagLeftIcon
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

const MoviePage = ({ movie }) => {
    const router = useRouter();
    const { movieId } = router.query;
    const [images, setImages] = useState([]);
    const [showSliders, setShowSliders] = useState(false);

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


    return (
        <>
            <Box display='flex'
                alignItems='center'
                justifyContent='center'
                gap={4}
                flexWrap={'wrap'}>
                <Box
                    display='flex'
                    alignItems='center'
                    width='100%'
                    height='40rem'
                    overflow='hidden'>
                    {!showSliders ?
                        <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title}
                            fallbackSrc="../image-not-found.jpg"
                            width='100%'
                            height='100%'
                            objectFit='fill' />
                        :
                        <ImagesCarousel images={images.backdrops} renderItem={
                            (item, otherProps) =>
                                <Image
                                    src={`https://image.tmdb.org/t/p/original${item.props.image.file_path}`}
                                    alt={item.props.image.file_path}
                                    objectFit='fill'
                                    fallbackSrc="../image-not-found.jpg"
                                    width='100%'
                                    height='100%'
                                    objectFit='fill'
                                    {...otherProps}
                                />
                        } infiniteLoop={true}
                            showIndicators={true}
                            interval={2000}
                            stopOnHover={false}
                            autoPlay={true} 
                            showThumbs={false} 
                            />
                    }
                </Box>
                <Box
                    display='flex'
                    width='100%'
                    mx={5}
                    p={5}
                    gap='5rem'
                    alignItems='center'
                    overflow='hidden'>
                    <Box
                        display='flex'
                        alignItems='center'
                        width='32rem'
                        height='32rem'
                        border='2px'
                        boxShadow='dark-lg'
                        borderRadius='lg'
                        overflow='hidden'>
                        {!showSliders ?
                            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                boxShadow='dark-lg'
                                objectFit='fill'
                            /> :
                            <ImagesCarousel images={images.posters} className="poster-carousel" renderItem={
                                (item, otherProps) =>
                                    <Image src={`https://image.tmdb.org/t/p/w500${item.props.image.file_path}`}
                                        alt={item.props.image.file_path}
                                        objectFit='fill'
                                        border='2px'
                                        className="poster-carousel-image"
                                        borderRadius='lg'
                                        {...otherProps}
                                    />} showIndicators={false}
                                infiniteLoop={true}
                                autoPlay={true}
                                interval={1500}
                                stopOnHover={false}
                                showArrows={false}
                                dynamicHeight={true}
                                showThumbs={false} 
                                />
                        }
                    </Box>
                    <VStack align='flex-start' spacing='1.5rem'>
                        <Text fontSize='4xl'>{movie.title}</Text>
                        <HStack gap={3}>
                            <Tooltip label='Release Date' hasArrow placement='bottom'>
                                <Tag py={2} px={3} colorScheme='yellow'>
                                    <TagLeftIcon as={CalendarIcon} />
                                    <TagLabel> {movie.release_date}</TagLabel>
                                </Tag>
                            </Tooltip>
                            <WatchOption movieId={movie.id} />
                        </HStack>
                        <HStack spacing='2rem'>
                            <Rating rating={movie.vote_average} />
                            <MovieSocialLinks movieId={movie.id} />
                        </HStack>
                        <Genres genresList={movie.genres} withGenreNames={true} size='lg' />
                        <VStack align='flex-start'>
                            <Text fontSize='2xl'>Overview</Text>
                            <Divider />
                            <Text>{movie.overview}</Text>
                        </VStack>
                        <Production productionData={movie.production_companies} />
                        <HStack spacing='2rem'>
                            <WatchListButton movieId={movie.id} />
                            {movie.homepage &&
                                <Tooltip label="Movie's official website" hasArrow placement='bottom'>
                                    <ExternalLink href={movie.homepage} isExternal>
                                        <Button rightIcon={<ExternalLinkIcon />}
                                            title='Website' variant='outline'>
                                            Homepage
                                        </Button>
                                    </ExternalLink>
                                </Tooltip>
                            }
                            <Link href={`/movies/${movie.id}/videos`}>
                                <Button leftIcon={<MdOutlineOndemandVideo />} rightIcon={<ArrowRightIcon />} variant='outline' colorScheme='blue'>
                                    Videos
                                </Button>
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
                <CastList movieId={movie.id} />
                <RelatedMovies movieId={movie.id} />
            </Box>

        </>
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

export default MoviePage;