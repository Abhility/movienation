import CastSkeleton from "../../components/loaders/skeletons/CastSkeleton";
import MovieSkeleton from "../../components/loaders/skeletons/MovieSkeleton";

const TrendingMoviesPage = () => {

    return (
        <>
       <MovieSkeleton count={3}/>
       <CastSkeleton count={10}/>
       </>
    );

};

export default TrendingMoviesPage;