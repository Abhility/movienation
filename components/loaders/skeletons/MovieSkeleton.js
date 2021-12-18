import { HStack, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

const MovieSkeleton = ({ count }) => {

    return (
        <HStack
            gap={16}
            width='100%'
            justify='center'
            flexWrap='wrap'>
            {Array(count)
                .fill(0)
                .map((_, i) =>
                    <VStack
                        key={i}
                        borderRadius='lg'
                        width='sm'
                        boxShadow='dark-lg'
                        alignItems='center'
                    >
                        <Skeleton height='xs' borderRadius='lg' width='100%' />
                        <VStack
                            p='4'
                            width='100%'
                            display='flex'
                            flexDirection='column'
                            alignItems='flex-start'
                            mx='0 !important'>
                            <Skeleton height='15px' width='12%' borderRadius='full'/>
                            <Skeleton height='20px' width='80%' />
                            <Skeleton height='25px' width='50%' />
                            <HStack width='100%' gap={4}>
                            <Skeleton height='32px' width='30%' borderRadius='md'/>
                            <Skeleton height='32px' width='30%'borderRadius='md' />
                            </HStack>
                            <HStack justifyContent='space-between' width='100%'>
                            <Skeleton height='45px' width='40%' borderRadius='lg' />
                            <Skeleton height='45px' width='45%' borderRadius='lg' />
                            </HStack>
                            
                        </VStack>
                    </VStack>
                )}
        </HStack>
    );
}

export default MovieSkeleton;

{/* <HStack>
                                <SkeletonText width='20px' />
                                <SkeletonText width='20px' />
                            </HStack>
                            <HStack>
                                <SkeletonText width='30px' />
                                <SkeletonText width='30px' />
                            </HStack> */}