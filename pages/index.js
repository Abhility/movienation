import { Box } from "@chakra-ui/react";
import Hero from "../components/ui/Hero";

const HomePage = ({ movieData }) => {

  return (
    <Box minH='100vh' width='100%'>
      <Hero movies={movieData.results.filter(movie => !!movie.poster_path)} />
    </Box>
  );

}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:5000/movie-info/getmovies/now_playing?page=1');
  const data = await response.json();

  return {
    props: {
      movieData: data
    },
    revalidate: 80000
  }
}

export default HomePage;
