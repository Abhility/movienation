import { VStack, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import useHttp from "../hooks/useHttp";
import Pagination from "./ui/Pagination";
import MovieList from "./ui/MoviesList";
import { animations } from "../constants/global";
import Lottie from "lottie-web";

const Search = () => {
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const { data, loading, hasError } = useHttp(`${process.env.NEXT_PUBLIC_API_BASE_URL}/movie-info/search/${query}?page=${currentPage}`);
    const searchedMovies = data?.results;
    const totalPages = data?.total_pages;

    const onChange = (event) => {
        setQuery(event.target.value);
    }

    const pageChange = (page) => {
        setCurrentPage(page);
    }

    const searchAnimation = useRef();
    useEffect(() => {
        Lottie.loadAnimation({
            container: searchAnimation.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: animations.SEARCH
        });
    }, []);

    return (
        <VStack align='center' width='100%' minHeight='100vh' gap={5}>
            <Text fontSize={'xl'}>Search Here!</Text>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    {<BsSearch />}
                </InputLeftElement>
                <Input type='text' placeholder='Search movie...' value={query} onChange={onChange} />
            </InputGroup>
            {!data && 
            <>
            <Text fontSize='xl'>Start typing in above input box, your searches will appear here.</Text>
            <div ref={searchAnimation}></div>
            </>
            }
            <MovieList movies={searchedMovies} count={12} loading={loading} />
            {data && <Pagination noOfPages={totalPages} currentPage={currentPage} pageChange={pageChange} />}
        </VStack>
    );
};

export default Search;