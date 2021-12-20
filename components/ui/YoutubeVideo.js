import { AspectRatio, Text, VStack, HStack, Tooltip, Skeleton, Badge, Tag, TagLabel, TagLeftIcon, TagRightIcon } from "@chakra-ui/react";
import { useState } from "react";
import { MdVerified } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai"

const YoutubeVideo = ({ videoData }) => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    return (
        <VStack align='flex-start' gap={1}>
            <Tooltip label={videoData.official && 'Official Video'} hasArrow placement='right'>
                <HStack>
                    <Tag size='lg' px={5} py={3} colorScheme='black'>
                        <TagLeftIcon as={AiFillYoutube} size='lg' style={{fill : '#8B0000'}} />
                        <TagLabel>
                            {videoData.name}
                        </TagLabel>
                        {videoData.official && <TagRightIcon as={MdVerified} style={{ fill: '#1DA1F2' }}/>}
                    </Tag>
                </HStack>
            </Tooltip>
            <HStack gap={2}>
                <Badge
                    colorScheme='blue'
                    py={1}
                    px={3}
                    variant='outline'
                    borderRadius='xl'>
                    {videoData.type}
                </Badge>
                <Badge
                    colorScheme='yellow'
                    py={1}
                    px={3}
                    variant='outline'
                    borderRadius='xl'>
                    {new Date(videoData.published_at).toDateString()}
                </Badge>
            </HStack>
            <AspectRatio width='1080px' ratio={16 / 9}>
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