import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import VideoSkeleton from "../../../components/loaders/skeletons/VideoSkeleton";
import YoutubeVideo from "../../../components/ui/YoutubeVideo";

const MovieVideosPage = () => {
    const router = useRouter();
    const { movieId } = router.query;
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovieVideos = async () => {
        if (router.isReady) {
            const response = await fetch(`http://localhost:5000/movie-info/getmovie/${movieId}/videos`);
            let data = await response.json();
            setLoading(false);
            setVideos(data.results);
        }
    };

    useEffect(() => {
        fetchMovieVideos();
    }, [movieId]);

    return (
        <VStack width='xl'
            width='100%'
            align='center'
            mx='auto'
            gap='2rem'
            mt='1rem'
            mb='1rem'>
            <Text fontSize='3xl'>Videos</Text>
            <Link href={`/movies/${movieId}`}>
                <Button leftIcon={<ArrowLeftIcon />} variant='outline' colorScheme='blue'>Go Back</Button>
            </Link>
            {loading ? <VideoSkeleton count={3} /> :
                videos && videos.map(video => (
                    <YoutubeVideo key={video.id} videoData={video} />
                ))
            }
        </VStack>
    );
}

export default MovieVideosPage;