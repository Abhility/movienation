import {
    AspectRatio, Text, VStack, HStack,
    Skeleton, Badge, Tag, TagLabel, TagLeftIcon,
    useColorModeValue
} from "@chakra-ui/react";
import { useState } from "react";
import { MdVerified, MdVideocam } from "react-icons/md";
import { AiFillCalendar, AiFillYoutube } from "react-icons/ai"

const YoutubeVideo = ({ videoData }) => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    return (
        <VStack align='flex-start' gap={1} width='100%'>
            <HStack width='100%'>
                <Tag size='lg' px={5} py={3} colorScheme={useColorModeValue('blue', 'dark')}>
                    <TagLeftIcon as={AiFillYoutube} style={{ fill: '#8B0000' }} />
                    <TagLabel>
                        {videoData.name}
                    </TagLabel>
                </Tag>
            </HStack>
            <HStack gap={2} flexWrap='wrap'>
                <Badge
                    colorScheme='blue'
                    py={1}
                    px={3}
                    variant='outline'
                    mx='0 !important'
                    borderRadius='xl'>
                    <HStack>
                        <MdVideocam style={{ fill: '#3182ce' }} />
                        <Text>{videoData.type}</Text>
                    </HStack>
                </Badge>
                <Badge
                    colorScheme='yellow'
                    py={1}
                    px={3}
                    mx='0 !important'
                    variant='outline'
                    borderRadius='xl'>
                    <HStack>
                        <AiFillCalendar style={{ fill: '#DBA506' }} />
                        <Text> {new Date(videoData.published_at).toDateString()}</Text>
                    </HStack>
                </Badge>
                {videoData.official && <Badge
                    colorScheme='blue'
                    py={1}
                    px={3}
                    mx='0 !important'
                    borderRadius='xl'>
                    <HStack>
                        <MdVerified style={{ fill: '#1DA1F2' }} />
                        <Text>Official</Text>
                    </HStack>
                </Badge>}
            </HStack>
            <AspectRatio width={videoLoaded ? '100%' : '0'} max-width='1080px' ratio={16 / 9}>
                <iframe
                    title={videoData.name}
                    src={`https://www.youtube.com/embed/${videoData.key}`}
                    onLoad={() => setVideoLoaded(true)}
                    allowFullScreen
                />
            </AspectRatio>
            {!videoLoaded && <Skeleton width='100%' height='480px' />}
        </VStack>
    );
};

export default YoutubeVideo;