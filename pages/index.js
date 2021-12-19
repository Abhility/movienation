import MovieList from "../components/ui/MoviesList";
import WelcomeLoader from "../components/loaders/WelcomeLoader";
import Pagination from "../components/Pagination";
import { VStack } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";

const HomePage = ({ movieData }) => {
  const { results: preLoadedMovies, total_pages: totalPages } = movieData;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(preLoadedMovies);
  const isMounted = useRef(false);


  const fetchMoviesFromPage = async () => {
    const response = await fetch(`http://localhost:5000/movie-info/trending?page=${currentPage}`);
    const data = await response.json();
    setMovies(data.results);
    setCurrentPage(data.page);
    setLoading(false);
  };

  useEffect(() => {
    if (isMounted.current) {
      setLoading(true);
      fetchMoviesFromPage();
    } else {
      isMounted.current = true;
    }
  }, [currentPage]);

  const nextPageClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    const isLastPageOfCurrentBlock = currentPage % 10 == 0;
    const toPage = isLastPageOfCurrentBlock ?
      currentPage + 1
      : (Math.floor((currentPage + 10) / 10) * 10) + 1;
    setCurrentPage(toPage);
  };

  const prevPageClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    const isFirstPageOfCurrentBlock = currentPage % 10 == 1;
    const toPage = isFirstPageOfCurrentBlock ?
      currentPage - 1
      : (Math.floor((currentPage - 10) / 10) * 10);
    setCurrentPage(toPage);
  };

  const pageClick = (pageNumber) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    setCurrentPage(pageNumber);
  }

  return (
    <VStack my={10} mx={3} gap={5}>
      <WelcomeLoader />
      <MovieList movies={movies} loading={loading} count={12} />
      <Pagination
        noOfPages={totalPages}
        currentPage={currentPage}
        nextPageClick={nextPageClick}
        prevPageClick={prevPageClick}
        pageClick={pageClick}
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
