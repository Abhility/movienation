import MovieList from "../components/ui/MoviesList";
import WelcomeLoader from "../components/loaders/WelcomeLoader";

const HomePage = ({ movies }) => {

  return (
    <>
      <WelcomeLoader />
      <MovieList movies={movies} />
    </>
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
