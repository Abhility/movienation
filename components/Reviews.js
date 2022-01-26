import { Divider, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import useHttp from "../hooks/useHttp";
import Carousel from "./carousel/Carousel";
import Review from "./ui/Review";

const Reviews = ({ movieId }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, loading, hasError } = useHttp(`${process.env.NEXT_PUBLIC_API_BASE_URL}/movie-info/movie/${movieId}/reviews?page=${currentPage}`);
    const movieReviews = data?.results;

    return (
        movieReviews?.length > 0 &&
        <VStack gap={4} width='100%' height='400px' align='center' justify='center'>
            <Text fontSize='4xl'>Reviews</Text>
            <Divider />
            {loading ? <h1>loading</h1> :
                <Carousel
                    items={movieReviews.map(review => <Review key={review.id} review={review} />)}
                    dots={true}
                    pauseOnHover={true}
                    effect='creative'
                />
            }
        </VStack>
    );
};

export default Reviews;