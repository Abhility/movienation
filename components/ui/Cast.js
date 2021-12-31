import { Text, VStack, Box, Image } from "@chakra-ui/react";
import { imageUrls } from "../../constants/global";

const Cast = ({ cast }) => {

    const stockImage = cast.gender === 0
        ? imageUrls.STOCK.cast.unknown
        : (cast.gender === 1 ? imageUrls.STOCK.cast.woman : imageUrls.STOCK.cast.man);

    let imagePath = cast.profile_path
        ? `${imageUrls.TMDB.medium}${cast.profile_path}`
        : stockImage;

    return (
        <VStack
            justify='flex-end'
            width='100%'
            height='100%'
            bgImage={`url(${imagePath})`}
            borderRadius='lg'
            backgroundSize='cover'
            backgroundPosition='center'
        >
            <Box
                width='100%'
                display='flex'
                flexDirection='column'
                bg='black'
                borderBottomLeftRadius='lg'
                borderBottomRightRadius='lg'
                p={2}
                opacity={0.8}
                alignItems='center'>
                <Text noOfLines={1} fontSize='lg' color='white'>{cast.name}</Text>
                <Text noOfLines={1} fontSize='sm' color='gray'>{cast.character}</Text>
            </Box>
        </VStack>
    )
}

export default Cast;