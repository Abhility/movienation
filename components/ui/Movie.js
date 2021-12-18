import { Box, Badge, Image, Text, Button, VStack } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { BiDetail } from 'react-icons/bi';
import Genres from './Genres';
import Rating from './Rating';
import Link from 'next/link';
import WatchListButton from '../WatchListButton';
const Movie = ({ movie }) => {
    return (
        <Box
            maxW='md'
            borderWidth='1px'
            borderRadius='lg'
            border={'1px'}
            overflow='hidden'
            boxShadow='dark-lg'>
            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                objectFit='fill'
                width='sm'
                height='xs'
                loading='lazy' />
            <VStack
                p='4'
                display='flex'
                flexDirection='column'
                alignItems='flex-start'
                gap={2}>
                <Badge borderRadius='full' px='2' colorScheme='yellow'> {movie.release_date.split('-')[0]}</Badge>
                <Text fontSize='xl'>{movie.title}</Text>
                <Rating rating={movie.vote_average} />
                <Genres genresList={movie.genre_ids} />
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    width='100%'>
                    <WatchListButton movieId={movie.id} />
                    <Link href={`/movies/${movie.id}`}>
                        <Button leftIcon={<BiDetail />} rightIcon={<ArrowRightIcon />} colorScheme='blue' variant='outline'>
                            More Details
                        </Button>
                    </Link>
                </Box>
            </VStack>
        </Box>
    )

}

export default Movie;