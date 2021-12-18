import { HStack, SkeletonCircle } from "@chakra-ui/react";

const Circle = ({ count, size = 8 }) => {

    return (
        <HStack>
            {Array(count)
                .fill(0)
                .map((_, i) => <SkeletonCircle size={size} key={i} />)}
        </HStack>
    )

};

export default Circle;