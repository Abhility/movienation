import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import VideoSkeleton from "../../../components/loaders/skeletons/VideoSkeleton";
import YoutubeVideo from "../../../components/ui/YoutubeVideo";
import useHttp from "../../../hooks/useHttp";

const MovieVideosPage = () => {
    const router = useRouter();
    const { movieId } = router.query;
    const {data,loading, hasError } = useHttp(`http://localhost:5000/movie-info/getmovie/${movieId}/videos`);
    const videos = data?.results;

    return (
        <VStack
            width='100%'
            align='center'
            mx='auto'
            gap='2rem'
            mt='1rem'
            mb='1rem'>
            <Text fontSize='3xl'>Videos</Text>
            <Link href={`/movies/${movieId}`} passHref>
                <Button leftIcon={<ArrowLeftIcon />} variant='outline' colorScheme='blue'>Go Back</Button>
            </Link>
            {loading ? <VideoSkeleton count={3} /> :
                videos?.length > 0 ? videos.map(video => (
                    <YoutubeVideo key={video.id} videoData={video} />
                )) : <Text fontSize='xl'>No videos found!!</Text>
            }
        </VStack>
    );
}

export default MovieVideosPage;