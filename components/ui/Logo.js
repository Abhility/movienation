import { HStack, Icon, Text } from "@chakra-ui/react";
import { BiMoviePlay } from "react-icons/bi";

const Logo = () => {
    return (
        <HStack align='center'>
            <Icon as={BiMoviePlay} />
            <Text fontSize='xl'>MovieNation</Text>
        </HStack>
    )
};

export default Logo;