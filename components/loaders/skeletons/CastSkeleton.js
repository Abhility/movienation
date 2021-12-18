import { HStack, Skeleton, VStack } from "@chakra-ui/react";
import Circle from "./Circle";

const CastSkeleton = ({ count }) => {
    return (
        <HStack gap={5} justify='center' flexWrap='wrap'>
            {
                Array(count)
                    .fill(0)
                    .map((_, i) =>
                        <VStack key={i}>
                            <Circle size='110' />
                            <Skeleton width='80px' height='15px' />
                            <Skeleton width='80px' height='10px' />
                        </VStack>)
            }
        </HStack>
    );
}

export default CastSkeleton;