import { Avatar, Text, VStack, Box } from "@chakra-ui/react";

const Cast = ({ cast }) => {

    const truncateName = (name) => name.length > 13 ? name.replace('-', ' ').split(' ')[0] : name;

    return (
        <VStack align='center' justify='space-evenly'>
            <Avatar size='xl' name={cast.name} src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} />
            <Box display='flex' flexDirection='column' alignItems='center'>
                <Text fontSize='md'>{truncateName(cast.name)}</Text>
                <Text fontSize='sm' color='gray'>{truncateName(cast.character)}</Text>
            </Box>
        </VStack>
    )
}

export default Cast;