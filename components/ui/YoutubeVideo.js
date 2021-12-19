import { AspectRatio, Text, VStack, HStack, Tooltip, Skeleton } from "@chakra-ui/react";
import { useState } from "react";
import { MdVerified } from "react-icons/md";

const YoutubeVideo = ({ videoData }) => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    return (
        <VStack align='flex-start'>
            <Tooltip label={videoData.official && 'Official Video'} hasArrow placement='right'>
                <HStack>
                    <Text fontSize='2xl'>{videoData.name}</Text>
                    {videoData.official && <MdVerified style={{ fill: '#1DA1F2' }} />}
                </HStack>
            </Tooltip>
            <Text color='grey'>{videoData.type}</Text>
            <AspectRatio width={videoLoaded ? videoData.size : 0} ratio={16 / 9}>
                <iframe
                    title={videoData.name}
                    src={`https://www.youtube.com/embed/${videoData.key}`}
                    onLoad={() => setVideoLoaded(true)}
                    allowFullScreen
                />
            </AspectRatio>
            {!videoLoaded && <Skeleton width='1080px' height='480px' />}
        </VStack>
    );
};

export default YoutubeVideo;