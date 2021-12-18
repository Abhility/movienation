import { Tag, TagLabel, TagLeftIcon, Box, HStack } from "@chakra-ui/react";
import { FcFilmReel } from 'react-icons/fc';
import { genres } from "../../constants/global";

const Genres = ({ genresList, withGenreNames, size }) => {
    let genreNames = [];
    if (withGenreNames) {
        genreNames = genresList.map(genre => genre.name);
    } else {
        genreNames = genresList.slice(0, 3)
            .map(genreId => genres.find(genre => genreId === genre.id)?.name);
    }
    return (
        <HStack>
            {genreNames.map((genre) => (
                <Tag py={2} size={size ? size : 'md'} key={genre} variant='outline' color='white' colorScheme={'blue'}>
                    <TagLeftIcon as={FcFilmReel} />
                    <TagLabel>{genre}</TagLabel>
                </Tag>
            ))}
        </HStack>
    );
}

export default Genres;