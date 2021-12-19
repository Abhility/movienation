import { Box, Badge, Image, Text, Button, VStack, Tooltip } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { BiDetail } from 'react-icons/bi';
import Genres from './Genres';
import Rating from './Rating';
import Link from 'next/link';
import WatchListButton from '../WatchListButton';
import { imageUrls } from '../../constants/global';
const Movie = ({ movie }) => {

    const MoreDetailsButton = () => {
        return (
            <Link href={`/movies/${movie.id}`} passHref>
                <Button leftIcon={<BiDetail />} rightIcon={<ArrowRightIcon />} colorScheme='blue' variant='outline'>
                    More Details
                </Button>
            </Link>
        );
    };

    return (
        <VStack
            borderRadius='lg'
            width='sm'
            min-height='xl'
            overflow='hidden'
            boxShadow='dark-lg'
            mx='0 !important'>
            <Image src={`${imageUrls.TMDB.medium}${movie.poster_path}`}
                alt={movie.title}
                objectFit='fill'
                width='100%'
                height='xs'
                loading='lazy' />
            <VStack
                p='4'
                width='100%'
                display='flex'
                flexDirection='column'
                alignItems='flex-start'
                gap={2}>
                <Badge borderRadius='full' px='2' colorScheme='yellow'> {movie.release_date.split('-')[0]}</Badge>
                <Tooltip label={movie.title} hasArrow placement='bottom'>
                    <Text noOfLines={1} fontSize='xl'>{movie.title}</Text>
                </Tooltip>
                <Rating rating={movie.vote_average} />
                <Genres genreList={movie.genre_ids} limit={2} />
                <Box
                    display='flex'
                    alignItems='center'
                    flexWrap='wrap'
                    justifyContent='space-between'
                    gap='1rem'
                    width='100%'>
                    <WatchListButton movieId={movie.id} />
                    <MoreDetailsButton />
                </Box>
            </VStack>
        </VStack>
    )

}

export default Movie;