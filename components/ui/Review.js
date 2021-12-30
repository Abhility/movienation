import { Avatar, Badge, Divider, HStack, Text, VStack } from '@chakra-ui/react';
import { AiFillCalendar } from 'react-icons/ai';
import { imageUrls } from '../../constants/global';
import Rating from './Rating';

const Review = ({ review }) => {
    const { author_details: author } = review;
    return (
        <VStack
            align='flex-start'
            p={4}
            bg='#171923'
            borderRadius='lg'
            height='100%'
            width='100%'>
            <HStack gap={3}>
                <HStack gap={3}>
                    <Avatar name={author.name} src={`${imageUrls.TMDB.small}${author.avatar_path}`} size='md' />
                    <VStack align='flex-start'>
                        <Text color='white' fontWeight='bold'>
                            Segun Adebayo
                        </Text>
                        <Text color='gray' fontSize='sm'>{new Date(review.created_at).toDateString()}</Text>
                    </VStack>
                </HStack>
            </HStack>
            <Divider />
            <HStack height='50%' align='flex-start'>
                <Text color='white' noOfLines={4}>{review.content}</Text>
            </HStack>
            <Divider />
            <VStack align='flex-start'>
                <Text color='white' fontSize='sm'>Rating</Text>
                <Rating rating={author.rating} />
            </VStack>
        </VStack>
    )
}

export default Review;
