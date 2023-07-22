import { VStack } from "@chakra-ui/react";
import useHttp from "../hooks/useHttp";
import { useState } from "react";
import MovieList from "./ui/MoviesList";
import Pagination from "./ui/Pagination";

const Trending = ({ movieData }) => {
    const { results: preLoadedMovies, total_pages: totalPages } = movieData;
    const [currentPage, setCurrentPage] = useState(1);
    const { data, loading, hasError } = useHttp(`https://moviefy.glitch.me/movie-info/trending?page=${currentPage}`);
    const movies = data ? data.results : preLoadedMovies;

    const pageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <VStack my={10} mx={3} gap={5}>
            <MovieList movies={movies} loading={loading} count={12} />
            <Pagination
                noOfPages={totalPages}
                currentPage={currentPage}
                pageChange={pageChange}
            />
        </VStack>
    );
};

export default Trending;