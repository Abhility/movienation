import { Text, VStack, Box, Image } from "@chakra-ui/react";
import { imageUrls } from "../../constants/global";

const Cast = ({ cast }) => {

    return (
        <VStack
            justify='space-between'
            width='100%'>
            <Image
                src={`${imageUrls.TMDB.medium}${cast.profile_path}`}
                fallbackSrc={imageUrls.STOCK.cast}
                borderRadius='lg'
                width='100%'
                height='100%'
                objectFit='fill'
            />
            <Box width='100%' display='flex' flexDirection='column' alignItems='center'>
                <Text noOfLines={1} fontSize='lg'>{cast.name}</Text>
                <Text noOfLines={1} fontSize='sm' color='gray'>{cast.character}</Text>
            </Box>
        </VStack>
    )
}

export default Cast;