import { SimpleGrid, Icon, Text, Stack, Flex, useColorModeValue, VStack } from '@chakra-ui/react';
import { BsBookmarkPlusFill } from 'react-icons/bs';
import { MdOndemandVideo, MdOutlineTravelExplore } from 'react-icons/md';

const Feature = ({ title, text, icon }) => {
    return (
        <Stack 
        bg={useColorModeValue('gray.100', 'gray.900')}
        p='3rem'
        rounded='xl'
        >
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={useColorModeValue('blue.200', 'blue.700')}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    );
};

const FeatureSection = () => {
    return (
        <VStack p={4}>
            <Text fontSize='4xl' fontWeight={700} my={5}> Features of Movienation</Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Icon as={MdOutlineTravelExplore} w={10} h={10} />}
                    title={'Explore'}
                    text={
                        'Explore, search and find details of movies and make your decision on watch to watch. '
                    }
                />
                <Feature
                    icon={<Icon as={BsBookmarkPlusFill} w={10} h={10} />}
                    title={'Create Watchlist'}
                    text={
                        'Create watchlist of the movies that you never want to miss.'
                    }
                />
                <Feature
                    icon={<Icon as={MdOndemandVideo} w={10} h={10} />}
                    title={'Watch Videos'}
                    text={
                        'Watch trailers, teasers, featured content etc. for movies at a one platform.'
                    }
                />
            </SimpleGrid>
        </VStack>
    );
}

export default FeatureSection;