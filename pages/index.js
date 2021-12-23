import MovieList from "../components/ui/MoviesList";
import WelcomeLoader from "../components/loaders/WelcomeLoader";
import Pagination from "../components/Pagination";
import { VStack } from "@chakra-ui/react";
import useHttp from "../hooks/useHttp";
import { useState } from "react";

const HomePage = ({ movieData }) => {
  const { results: preLoadedMovies, total_pages: totalPages } = movieData;
  const [currentPage , setCurrentPage] = useState(1);
  const { data, loading, hasError } = useHttp(`http://localhost:5000/movie-info/trending?page=${currentPage}`);
  const movies = data ? data.results : preLoadedMovies;

  const pageChange = (page) =>{
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

}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:5000/movie-info/trending?page=1');
  const data = await response.json();

  return {
    props: {
      movieData: data
    },
    revalidate: 80000
  }
}

export default HomePage;
