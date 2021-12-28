import { HStack, Icon, Text } from "@chakra-ui/react";
import { BiMoviePlay } from "react-icons/bi";

const Logo = () => {
    return (
        <HStack>
            <Icon as={BiMoviePlay} />
            <Text>MovieNation</Text>
        </HStack>
    )
};

export default Logo;