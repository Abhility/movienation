import { Skeleton, VStack } from "@chakra-ui/react";

const VideoSkeleton = ({ count }) => {

    return (
        Array(count)
            .fill(0)
            .map((_, i) => (
                <VStack align='flex-start' key={i} width='100%'>
                    <Skeleton width='300px' height='25px' />
                    <Skeleton width='100px' height='10px' />
                    <Skeleton width='100%' height='480px' />
                </VStack>
            ))
    );
}

export default VideoSkeleton;