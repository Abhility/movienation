import { Avatar, Tag, TagLabel } from '@chakra-ui/react';

const Production = ({ production }) => {
    return (
        <Tag size='lg'
            colorScheme='black'
            borderRadius='full'
            gap={2}>
            <Avatar
                src={`https://image.tmdb.org/t/p/w300${production.logo_path}`}
                size='sm'
                className='production-avatar'
                ml={-3}
                name={production.name}
            />
            <TagLabel>{production.name}</TagLabel>
        </Tag>
    );
}

export default Production;