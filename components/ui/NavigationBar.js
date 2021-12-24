import {
    Box, Flex, Avatar, Button,
    Menu, MenuButton, MenuList, MenuItem, MenuDivider,
    useColorModeValue, useColorMode, Center, HStack, LinkBox, Text,
} from '@chakra-ui/react';
import { Icon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { MdExplore, MdMovie, MdSearch, MdTrendingUp } from 'react-icons/md';
import { BiMoviePlay } from 'react-icons/bi';
import Link from 'next/link';

const links = [
    { name: 'Trending', url: '/movies/trending', icon: MdTrendingUp },
    { name: 'Explore', url: '/movies/explore', icon: MdExplore },
    { name: 'Now Showing', url: '/movies/now-showing', icon: MdMovie },
    { name: 'Search', url: '/movies/search', icon: MdSearch },
];

const NavLink = ({ children, url }) => (
    <Box
        px={2}
        py={1}
        cursor='pointer'
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}>
        <Link href={url}>
            {children}
        </Link>
    </Box>
);

const NavigationBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <NavLink url='/'>
                        <HStack>
                            <Icon as={BiMoviePlay} />
                            <Text>MovieNation</Text>
                        </HStack>
                    </NavLink>
                    <HStack gap='5rem'>
                        <HStack gap={4}>
                            {
                                links.map(link => (
                                    <NavLink key={link.name} url={link.url}>
                                        <HStack>
                                            <Icon as={link.icon} />
                                            <Text>{link.name}</Text>
                                        </HStack>
                                    </NavLink>
                                ))
                            }
                        </HStack>
                        <HStack spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Profile</MenuItem>
                                    <MenuItem>Your WatchList</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </HStack>
                    </HStack>
                </Flex>
            </Box>
        </>
    );
};

export default NavigationBar;