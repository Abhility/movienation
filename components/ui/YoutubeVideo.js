import { AspectRatio, Text, VStack, Tag, TagLabel, TagLeftIcon, HStack, Tooltip } from "@chakra-ui/react";
import { MdVerified } from "react-icons/md";

const YoutubeVideo = ({ videoData }) => (
    <VStack align='flex-start'>
        <Tooltip label={videoData.official && 'Official Video'} hasArrow placement='right'> 
            <HStack>
                <Text fontSize='2xl'>{videoData.name}</Text>
                {videoData.official && <MdVerified style={{ fill: '#1DA1F2'}} />}
            </HStack>
        </Tooltip>
        <Text color='grey'>{videoData.type}</Text>
        <AspectRatio width={videoData.size < 1080 ? 720 : videoData.size} ratio={16 / 9}>
            <iframe
                title={videoData.name}
                src={`https://www.youtube.com/embed/${videoData.key}`}
                allowFullScreen
            />
        </AspectRatio>
    </VStack>
);

export default YoutubeVideo;