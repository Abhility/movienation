import { HStack, SkeletonCircle } from "@chakra-ui/react";

const Circle = ({ count = 1 }) => {

    return (
        <HStack>
            {Array(count)
                .fill(0)
                .map((_, i) => <SkeletonCircle key={i} />)}
        </HStack>
    )

};

export default Circle;