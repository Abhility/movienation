import { HStack, Skeleton, VStack } from "@chakra-ui/react";

const CastSkeleton = ({ count }) => {
    return (
        <HStack gap={5} justify='center' flexWrap='wrap'>
            {
                Array(count)
                    .fill(0)
                    .map((_, i) =>
                        <VStack key={i}>
                            <Skeleton width='300px' height='380px' />
                            <Skeleton width='300px' height='15px' />
                            <Skeleton width='300px' height='15px' />
                        </VStack>
                    )
            }
        </HStack>
    );
}

export default CastSkeleton;