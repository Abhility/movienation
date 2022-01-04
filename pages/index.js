import { VStack } from "@chakra-ui/react";
import Hero from "../components/ui/Hero";

const HomePage = (props) => {

  return (
    <VStack minH='100vh' width='100%' my={4} px={5} overflow='hidden' gap={5}>
      <Hero movies={props.nowShowingMovies.filter(movie => !!movie.poster_path)} />
    </VStack>
  );

}

export const getStaticProps = async () => {
  let response = await fetch('http://localhost:5000/movie-info/getmovies/now_playing?page=1');
  const nowShowing = await response.json();
  response = await fetch('http://localhost:5000/movie-info/trending?page=1');
  const trending = await response.json();

  return {
    props: {
      nowShowingMovies: nowShowing.results,
      trendingMovies: trending.results
    },
    revalidate: 80000
  }
}

export default HomePage;
