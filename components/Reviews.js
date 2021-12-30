import { Divider, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import useHttp from "../hooks/useHttp";
import CoverFlowCarousel from "./carousel/CoverFlowCarousel";
import Review from "./ui/Review";

const Reviews = ({ movieId }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, loading, hasError } = useHttp(`http://localhost:5000/movie-info/movie/${movieId}/reviews?page=${currentPage}`);
    const movieReviews = data?.results;

    return (
        movieReviews?.length > 0 &&
        <VStack gap={4} width='100%' height='400px' align='center' justify='center'>
            <Text fontSize='4xl'>Reviews</Text>
            <Divider />
            {loading ? <h1>loading</h1> :
                <CoverFlowCarousel
                    items={movieReviews.map(review => <Review review={review} />)}
                    effect='creative'
                />
            }
        </VStack>
    );
};

export default Reviews;