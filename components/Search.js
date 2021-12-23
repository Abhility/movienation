import { VStack, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import useHttp from "../hooks/useHttp";
import Pagination from "./Pagination";
import MovieList from "./ui/MoviesList";

const Search = () => {
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const { data, loading, hasError } = useHttp(`http://localhost:5000/movie-info/search/${query}?page=${currentPage}`);
    const searchedMovies = data?.results;
    const totalPages = data?.total_pages;

    const onChange = (event) => {
        setQuery(event.target.value);
    }

    const pageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <VStack align='center' width='100%'>
            <Text fontSize={'xl'}>Search Here!</Text>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    {<BsSearch />}
                </InputLeftElement>
                <Input type='text' placeholder='Search movie...' value={query} onChange={onChange} />
            </InputGroup>
            <MovieList movies={searchedMovies} count={12} loading={loading} />
            {data && <Pagination noOfPages={totalPages} currentPage={currentPage} pageChange={pageChange} />}
        </VStack>
    );
};

export default Search;