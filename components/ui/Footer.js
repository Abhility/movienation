import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
    Box, Button, chakra, Container, HStack, Image, Link, Stack,
    Text, useColorModeValue, VisuallyHidden, VStack
} from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import { FaInstagram, FaGithub, FaLinkedin, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { imageUrls, links } from '../../constants/global';
import Logo from './Logo';

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded='full'
            w={8}
            h={8}
            cursor='pointer'
            as='a'
            href={href}
            target='_blank'
            display='inline-flex'
            alignItems='center'
            justifyContent='center'
            transition='background 0.3s ease'
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            p={4}
            gap={2}
            display='flex'
            flexDirection='column'
            color={useColorModeValue('gray.700', 'gray.200')}>
            <VStack>
                <Logo />
                <HStack>
                    <Text fontSize='xs'>Powered By </Text>
                    <Link href='https://developers.themoviedb.org/' isExternal>
                        <Button
                            rightIcon={<ExternalLinkIcon />}
                            size='xs'>
                            Movie DB
                        </Button>
                    </Link>
                </HStack>
            </VStack>
            <Box
                borderTopWidth={1}
                borderStyle='solid'
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW='6xl'
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <VStack>
                        <Text>{`©${new Date().getFullYear()}  MovieNation. All rights reserved.`}</Text>
                        <HStack gap={2}>
                            <Text fontSize='xs'>Built with</Text>
                            <Image src={imageUrls.STOCK.nextJSLogo} alt='Next JS logo' width='20px' height='20px' />
                            <FaReact />
                            <FaNodeJs />
                            <SiMongodb />
                        </HStack>
                    </VStack>
                    <VStack>
                        <Text fontSize='md'>Developed with <AiFillHeart style={{ fill: '#C53030', display: 'inline' }} /> by Abhishek</Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label='Github' href={links.MINE.github}>
                                <FaGithub />
                            </SocialButton>
                            <SocialButton label='LinkedIn' href={links.MINE.linkedIn}>
                                <FaLinkedin />
                            </SocialButton>
                            <SocialButton label='Instagram' href={links.MINE.insta}>
                                <FaInstagram />
                            </SocialButton>
                        </Stack>
                    </VStack>
                </Container>
            </Box>
        </Box>
    );
};
export default Footer;
