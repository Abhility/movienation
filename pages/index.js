import { VStack } from "@chakra-ui/react";
import FeatureSection from "../components/ui/FeatureSection";
import HeroSection from "../components/ui/HeroSection";
import NowShowingSection from "../components/ui/NowShowingSection";

const HomePage = (props) => {

  return (
    <VStack minH='100vh' width='100%' my={4} px={5} overflow='hidden' gap={5}>
      <HeroSection />
      <NowShowingSection movies={props.nowShowingMovies.filter(movie => !!movie.poster_path)} />
      <FeatureSection />
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
