import MovieList from "../components/ui/MoviesList";
import WelcomeLoader from "../components/loaders/WelcomeLoader";
import Pagination from "../components/Pagination";
import { VStack } from "@chakra-ui/react";

const HomePage = ({ movies }) => {

  return (
    <VStack my={10} mx={3} gap={5}>
      <WelcomeLoader />
      <MovieList movies={movies} />
      <Pagination noOfPages={5} />
    </VStack>
  );

}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:5000/movie-info/trending');
  const data = await response.json();

  return {
    props: {
      movies: data
    },
    revalidate: 80000
  }
}

export default HomePage;
