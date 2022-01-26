import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { BsBookmarks } from "react-icons/bs";
import { MdExplore } from 'react-icons/md';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

const HeroSection = ({ movies }) => {

    const heroAnimation = useRef();
    useEffect(() => {
        Lottie.loadAnimation({
            container: heroAnimation.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets3.lottiefiles.com/private_files/lf30_bb9bkg1h.json'
        });
    }, []);

    return (
        <Stack
            direction={{ base: 'column', md: 'row' }}
            gap={3}
            px={8}
            py='4rem'
            rounded='2xl'
            bg={useColorModeValue('gray.100', 'gray.900')}
            align='center'
            width='100%'>
            <Flex flex={1} align={'center'} justify={'center'}>
                <Stack
                    rounded={'2xl'}
                    spacing={10}
                    w={'full'}
                    maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '20%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'blue.400',
                                zIndex: -1,
                            }}>
                            <Text as='span'
                                fontWeight='800'
                                fontStyle='oblique'
                                color={useColorModeValue('blue.200', 'blue.700')}>M</Text>ovienation
                        </Text>
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Your one stop destination for movies. Explore, search , watchlist movies you are interested in. Everything at one place.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button
                            rounded={'full'}
                            bg={useColorModeValue('blue.200', 'blue.700')}
                            leftIcon={<BsBookmarks />}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Create Watchlist
                        </Button>
                        <Link href='/movies/explore' passHref>
                            <Button
                                rounded='full'
                                variant='outline'
                                _hover={{
                                    bg: useColorModeValue('gray.200', 'gray.700')
                                }}
                                leftIcon={<MdExplore />}>
                                Explore Movies
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}
                align='center'>
                <div className="welcome-loader" ref={heroAnimation} />
            </Flex>
        </Stack>
    );
};

export default HeroSection;