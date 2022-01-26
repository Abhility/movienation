import MovieDetails from "../../../components/MovieDetails";

const MovieDetailsPage = ({ movie }) => {
    return (
        <MovieDetails movie={movie} />
    );
}

export const getServerSideProps = async (context) => {
    const { movieId } = context.params;

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/movie-info/getmovie/${movieId}`);
        const movieData = await response.json();
        if (movieData.success === false) {
            throw new Error(movieData.status_message);
        }
        return {
            props: {
                movie: movieData
            }
        }
    } catch (err) {
        return {
            notFound: true
        }
    }
}

export default MovieDetailsPage;