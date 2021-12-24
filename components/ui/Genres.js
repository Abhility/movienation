import { Tag, TagLabel, TagLeftIcon, Box, HStack } from "@chakra-ui/react";
import React from "react";
import { FcFilmReel } from 'react-icons/fc';
import { genres } from "../../constants/global";

const Genres = ({ genreList, limit, size }) => {
    let finalGenreList = genreList.map(genreId => genres.find(genre => genreId === genre.id)?.name);
    finalGenreList = limit ? finalGenreList.slice(0, limit) : finalGenreList;
    return (
        <HStack flexWrap="wrap" gap='1rem'>
            {finalGenreList.map((genre) => (
                <Tag py={2}
                    size={size ? size : 'md'}
                    key={genre} variant='outline'
                    mx='0 !important'
                    colorScheme={'blue'}>
                    <TagLeftIcon as={FcFilmReel} />
                    <TagLabel>{genre}</TagLabel>
                </Tag>
            ))}
        </HStack>
    );
}

export default Genres;