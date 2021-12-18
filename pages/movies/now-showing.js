import MovieList from "../../components/ui/MoviesList";

const NowShowingMovies = ({ movies }) => {
    return <MovieList movies={movies} />;
};

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:5000/movie-info/getmovies/now_playing');
    const data = await response.json();
    return {
        props: {
            movies: data
        }
    }
}

export default NowShowingMovies;