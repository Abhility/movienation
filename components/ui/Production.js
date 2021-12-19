import { Avatar, Tag, TagLabel } from '@chakra-ui/react';
import { imageUrls } from '../../constants/global';

const Production = ({ production }) => {
    return (
        <Tag size='lg'
            colorScheme='black'
            borderRadius='full'
            gap={2}>
            <Avatar
                src={production.logo_path && `${imageUrls.TMDB.small}${production.logo_path}`}
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