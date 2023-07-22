import Trending from "../../components/Trending";

const TrendingMoviesPage = ({ movieData }) => {
    return (
        <Trending movieData={movieData} />
    );
};

export const getStaticProps = async () => {
    const response = await fetch(`https://moviefy.glitch.me/movie-info/trending?page=1`);
    const data = await response.json();

    return {
        props: {
            movieData: data
        },
        revalidate: 80000
    }
}

export default TrendingMoviesPage;

// items={movies.map(movie => <Image src={`${imageUrls.TMDB.medium}${movie.poster_path}`}
// alt={movie.title}
// borderRadius='xl'
// width='100%'
// height='100%' />)}

// const { results: movies } = movieData;
// return (
//     <HStack width='30%' mx='auto' mt={5}>
//         <Carousel
//             effect='cube'
//             items={movies.map(movie => <Movie movie={movie} />)} />
//     </HStack>
// );