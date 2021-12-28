import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import useHttp from "../hooks/useHttp";
import WelcomeLoader from "./loaders/WelcomeLoader";
import Pagination from "./ui/Pagination";
import MovieList from "./ui/MoviesList";

const NowShowing = ({ movieData }) => {
    const { results: preLoadedMovies, total_pages: totalPages } = movieData;
    const [currentPage, setCurrentPage] = useState(1);
    const { data, loading, hasError } = useHttp(`http://localhost:5000/movie-info/trending?page=${currentPage}`);
    const movies = data ? data.results : preLoadedMovies;

    const pageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <VStack my={10} mx={3} gap={5}>
            <WelcomeLoader />
            <MovieList movies={movies} loading={loading} count={12} />
            <Pagination
                noOfPages={totalPages}
                currentPage={currentPage}
                pageChange={pageChange}
            />
        </VStack>
    );
};

export default NowShowing;