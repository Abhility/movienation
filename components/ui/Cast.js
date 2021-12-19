import { Avatar, Text, VStack, Box } from "@chakra-ui/react";
import { imageUrls } from "../../constants/global";

const Cast = ({ cast }) => {

    return (
        <VStack
            justify='space-between'
            width='6rem'>
            <Avatar size='xl' name={cast.name} src={cast.profile_path ?
                `${imageUrls.TMDB.small}${cast.profile_path}`
                : imageUrls.STOCK.cast} />
            <Box width='100%' display='flex' flexDirection='column' alignItems='center'>
                <Text noOfLines={1} fontSize='sm'>{cast.name}</Text>
                <Text noOfLines={1} fontSize='xs' color='gray'>{cast.character}</Text>
            </Box>
        </VStack>
    )
}

export default Cast;