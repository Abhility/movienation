import { Avatar, Text, VStack, Box } from "@chakra-ui/react";

const Cast = ({ cast }) => {
    
    return (
        <VStack  
        justify='space-between'
        width='6rem'>
            <Avatar size='xl' name={cast.name} src={cast.profile_path && `https://image.tmdb.org/t/p/w500${cast.profile_path}`} />
            <Box width='100%' display='flex' flexDirection='column' alignItems='center'>
                <Text noOfLines={1} fontSize='sm'>{cast.name}</Text>
                <Text noOfLines={1} fontSize='xs' color='gray'>{cast.character}</Text>
            </Box>
        </VStack>
    )
}

export default Cast;