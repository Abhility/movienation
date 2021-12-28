import {
    Box, Flex, Avatar, Button,
    Menu, MenuButton, MenuList, MenuItem, MenuDivider,
    useColorModeValue, useColorMode, Center, HStack, Text,
    VStack, Drawer, DrawerOverlay, DrawerContent, DrawerHeader,
    DrawerBody, useDisclosure, CloseButton, IconButton,
} from '@chakra-ui/react';
import { Icon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { MdHome, MdExplore, MdMovie, MdSearch, MdTrendingUp } from 'react-icons/md';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import Logo from './Logo';

const links = [
    { name: 'Home', url: '/', icon: MdHome },
    { name: 'Trending', url: '/movies/trending', icon: MdTrendingUp },
    { name: 'Explore', url: '/movies/explore', icon: MdExplore },
    { name: 'Now Showing', url: '/movies/now-showing', icon: MdMovie },
    { name: 'Search', url: '/movies/search', icon: MdSearch },
];

const NavLink = ({ children, url, py, width }) => (
    <Box
        px={2}
        py={py}
        width={width}
        cursor='pointer'
        rounded='md'
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('blue.200', 'blue.700'),
        }}>
        <Link href={url}>
            {children}
        </Link>
    </Box>
);

const NavLinks = (props) => {
    const { onClick, ...otherProps } = props;
    return (
        links.map(link => (
            <NavLink key={link.name} url={link.url} {...otherProps}>
                <HStack onClick={onClick}>
                    <Icon as={link.icon} />
                    <Text>{link.name}</Text>
                </HStack>
            </NavLink>
        ))
    )

};

const MenuBar = () => {
    return (
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
    );
}

const ThemeButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton
            onClick={toggleColorMode}
            variant='outline'
            aria-label='change theme'
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        />
    );
}

const SideBar = ({ isOpen, onClose }) => {
    return (
        <Drawer
            placement='left'
            onClose={onClose}
            isOpen={isOpen}
            size='full'>
            <DrawerOverlay />
            <DrawerContent bg={useColorModeValue('gray.100', 'gray.900')}>
                <DrawerHeader borderBottomWidth='1px'>
                    <HStack justify='space-between'>
                        <Logo />
                        <CloseButton onClick={onClose} />
                    </HStack>
                </DrawerHeader>
                <DrawerBody>
                    <VStack gap={4} align='flex-start'>
                        <NavLinks py={4} width='100%' onClick={onClose} />
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}


const DesktopNavigation = () => {
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')}
            px={4}
            boxShadow='dark-lg'
            display={{ base: 'none', lg: 'block' }}
        >
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Logo />
                <HStack gap='5rem'>
                    <HStack gap={4}>
                        <NavLinks py={2} width='auto' />
                    </HStack>
                    <HStack spacing={7}>
                        <ThemeButton />
                        <MenuBar />
                    </HStack>
                </HStack>
            </Flex>
        </Box>
    );
};

const MobileNavigation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')}
            px={4}
            py={3}
            boxShadow='dark-lg'
            justifyContent='space-between'
            display={{ base: 'flex', lg: 'none' }}
        >
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <SideBar isOpen={isOpen} onClose={onClose} />
            <Logo />
            <HStack gap={2}>
                <ThemeButton />
                <MenuBar />
            </HStack>
        </Box>
    );
}

const NavigationBar = () => {
    return (
        <>
            <DesktopNavigation />
            <MobileNavigation />
        </>
    );

};

export default NavigationBar;