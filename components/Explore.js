import { Divider, HStack, Tag, TagLabel, TagLeftIcon, TagRightIcon, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsCheck2All } from "react-icons/bs";
import { FcFilmReel } from "react-icons/fc";
import { genres } from "../constants/global";
import useHttp from "../hooks/useHttp";
import Pagination from "./Pagination";
import MovieList from "./ui/MoviesList";

const Explore = () => {
    const [selectedGenre, setSelectedGenre] = useState('Action');
    const [currentPage, setCurrentPage] = useState(1);
    const { data, loading, hasError } = useHttp(`http://localhost:5000/movie-info/genre/${selectedGenre}?page=${currentPage}`);
    const totalPages = data?.total_pages;
    let moviesByGenres = data?.results;

    useEffect(() => {
       setCurrentPage(1);
    }, [selectedGenre])

    const pageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <VStack gap={3} align='center' width='100%'>
            <Text fontSize={'xl'}>Explore Movies By Genre!</Text>
            <HStack overflow='auto' flexWrap='wrap' gap={3}>
                {
                    genres.map(genre => (
                        <Tag
                            key={genre.id}
                            py={2}
                            px={3}
                            mx='0 !important'
                            colorScheme='blue'
                            borderRadius='full'
                            variant={selectedGenre === genre.name ? 'subtle' : 'outline'}
                            cursor='pointer'
                            onClick={() => setSelectedGenre(genre.name)}
                        >
                            <TagLeftIcon as={FcFilmReel} />
                            <TagLabel>{genre.name}</TagLabel>
                            {selectedGenre === genre.name && <TagRightIcon as={BsCheck2All} />}
                        </Tag>
                    ))
                }
            </HStack>
            <Divider />
            <MovieList movies={moviesByGenres} count={12} loading={loading} />
            {data && <Pagination noOfPages={totalPages} currentPage={currentPage} pageChange={pageChange} />}
        </VStack>
    );
};

export default Explore;