import { VStack, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import useHttp from "../hooks/useHttp";
import MovieList from "./ui/MoviesList";

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const { data, loading, hasError } = useHttp(`http://localhost:5000/movie-info/search/${query}`);
    let searchedMovies = data?.results;
    console.log(query,searchedMovies);

    const onChange = (event) => {
        setQuery(event.target.value);
    }

    return (
        <VStack align='flex-start' width='100%'>
            <Text fontSize={'xl'}>Search Here!</Text>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<BsSearch />}
                />
                <Input type='text' placeholder='Search movie...' value={query} onChange={onChange} />
            </InputGroup>
            <MovieList movies={searchedMovies} count={12} loading={loading} />
        </VStack>
    );
};

export default SearchBar;